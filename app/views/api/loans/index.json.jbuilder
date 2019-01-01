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

@loans.each do |loan|
  month, year = loan.issue_d.split("-")
  month = month_conv_hash[month]
  json.set! loan.id do
    json.extract! loan, :id, :int_rate, :term, :issue_d, :grade
    json.month month
    json.year year.to_i
  end
end
