class AddCellphoneToFriend < ActiveRecord::Migration
  def change
    add_column :friends, :cellphone, :string

  end
end
