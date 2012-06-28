class Event < ActiveRecord::Base         
  has_many :assistants
  has_many :friends, :through=>:assistants  
  has_many :comments       
  validates :name, :presence=>true
  validates :date_at, :presence=>true   
  validates :place, :presence=>true  
  mount_uploader :image, ImageUploader   
  
  def Event.reprocess_photos
    Event.all.each do |event|
       begin
          event.image.recreate_versions!
       rescue 
          print "Error"
       end
    end
  end
end
