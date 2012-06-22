class RemoveMisionFromEnterprises < ActiveRecord::Migration
  def up
    remove_column :enterprises, :mision
      end

  def down
    add_column :enterprises, :mision, :string
  end
end
