# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Loan.destroy_all

require 'csv'
filename = File.join Rails.root, "db/LoanStats3a.csv"
CSV.foreach(filename, :headers => true) do |row|
  Loan.create!(row.to_hash)
end
