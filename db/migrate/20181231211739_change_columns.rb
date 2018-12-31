class ChangeColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :loans, :grade, :string
  end
end
