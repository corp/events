class CommentsController < ApplicationController  
  
  before_filter :load_commentable

    def index  
      @layout=params[:layout] ? false : true 
      @comments = @commentable.comments       
      render :layout=>@layout
    end

    def new 
      @layout=params[:layout] ? false : true
      @comment = @commentable.comments.new 
      @comment.reply_to = params[:parent_id]
      render :layout=>@layout
    end

    def create
      @comment = @commentable.comments.new(params[:comment])
      respond_to do |format|
        if @comment.save
          format.html { redirect_to @comment, notice: 'Event was successfully commented.' }
          format.json { render json: {:id=>@commentable.id}, status: :created }    
          #logger.info("id=>"+@commentable.id)
        else
          format.html { render action: "new" }
          format.json { render json: @event.errors, status: :unprocessable_entity }
        end
      end
    end

  private

    def load_commentable
      resource, id = request.path.split('/')[1, 2]
      @commentable = resource.singularize.classify.constantize.find(id)
    end
  
end
