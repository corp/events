class AddMisionToEnterprises < ActiveRecord::Migration
  def change
    add_column :enterprises, :mision, :text

  end
end
