class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :content
      t.integer :respond_to

      t.timestamps
    end
  end
end
