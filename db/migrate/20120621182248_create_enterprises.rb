class CreateEnterprises < ActiveRecord::Migration
  def change
    create_table :enterprises do |t|
      t.string :mision
      t.string :vission

      t.timestamps
    end
  end
end
