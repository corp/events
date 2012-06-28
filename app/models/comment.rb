class Comment < ActiveRecord::Base   
  has_many :answers, :class_name =>"Comment", :foreign_key=>"reply_to"
  belongs_to :comment, :class_name =>"Comment" 
  belongs_to :event
end
