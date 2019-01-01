class AddYearAndMonth < ActiveRecord::Migration[5.2]
  def change
    add_column :loans, :year, :integer
    add_column :loans, :month, :integer
  end
end
