class CreateLoans < ActiveRecord::Migration[5.2]
  def change
    create_table :loans do |t|
      t.float :loan_amnt
      t.float :funded_amnt
      t.float :funded_amnt_inv
      t.string :term
      t.string :int_rate
      t.float :installment
      t.string :emp_length
      t.string :home_ownership
      t.float :annual_inc
      t.string :issue_d
      t.string :loan_status
    end
  end
end
