class AddDatatToEvents < ActiveRecord::Migration
  def change
    add_column :events, :date_at, :datetime

  end
end
