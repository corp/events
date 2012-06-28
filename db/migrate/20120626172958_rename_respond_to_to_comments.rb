class RenameRespondToToComments < ActiveRecord::Migration
  def up 
    rename_column :comments, :respond_to, :reply_to
  end

  def down     
    rename_column :comments, :reply_to, :respond_to                      
  end
end
