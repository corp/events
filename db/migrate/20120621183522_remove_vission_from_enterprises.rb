class RemoveVissionFromEnterprises < ActiveRecord::Migration
  def up
    remove_column :enterprises, :vission
      end

  def down
    add_column :enterprises, :vission, :string
  end
end
