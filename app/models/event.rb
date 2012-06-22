class Event < ActiveRecord::Base         
  has_many :assistants
  has_many :friends, :through=>:assistants 
  validates :name,  :presence=>true
  validates :date_at,  :presence=>true   
  validates :place, :presence=>true
end
