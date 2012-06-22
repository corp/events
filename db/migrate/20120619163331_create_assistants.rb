class CreateAssistants < ActiveRecord::Migration
  def change
    create_table :assistants do |t|
      t.integer :event
      t.integer :friend

      t.timestamps
    end
  end
end
