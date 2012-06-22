class CreateFriends < ActiveRecord::Migration
  def change
    create_table :friends do |t|
      t.string :name
      t.string :lastname
      t.string :nickname
      t.datetime :birthday
      t.string :address

      t.timestamps
    end
  end
end
