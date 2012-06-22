class AddVissionToEnterprises < ActiveRecord::Migration
  def change
    add_column :enterprises, :vission, :text

  end
end
