Loan.destroy_all

require 'csv'
filename = File.join Rails.root, "db/LoanStats3a.csv"
CSV.foreach(filename, :headers => true) do |row|
  # Fix term
  row["term"] = row["term"][1..2]
  # Fix int rate
  row["int_rate"] = row["int_rate"][1...-1].to_f

  # Just look at 2011
  year = row["issue_d"].split("-").last
  Loan.create!(row.to_hash) if year == "2011"
end
