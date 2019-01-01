Loan.destroy_all

require 'csv'
filename = File.join Rails.root, "db/LoanStats3a.csv"

month_conv_hash = {
  "Jan" => 1,
  "Feb" => 2,
  "Mar" => 3,
  "Apr" => 4,
  "May" => 5,
  "Jun" => 6,
  "Jul" => 7,
  "Aug" => 8,
  "Sep" => 9,
  "Oct" => 10,
  "Nov" => 11,
  "Dec" => 12
}

CSV.foreach(filename, :headers => true) do |row|
  # Fix term
  row["term"] = row["term"][1..2]
  # Fix int rate
  row["int_rate"] = row["int_rate"][1...-1].to_f

  row["year"] = row["issue_d"].split("-").last
  row["month"] = month_conv_hash[row["issue_d"].split("-").first]
  Loan.create!(row.to_hash)
end
