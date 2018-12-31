class ChangeDataTypes < ActiveRecord::Migration[5.2]
  def change
    remove_column :loans, :int_rate
    add_column :loans, :int_rate, :float
  end
end
