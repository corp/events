class Enterprise < ActiveRecord::Base     
  validates :mision, :presence=>true
  validates :vission, :presence=>true
end
