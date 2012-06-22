class Friend < ActiveRecord::Base                          
  has_many :assitants
  has_many :events, :through=> :assistants 
  validates :name, :presence=>true
  validates :lastname, :presence=>true   
end
