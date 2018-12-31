@loans.each do |loan|
  json.set! loan.id do
    json.extract! loan, :id, :int_rate, :term, :issue_d, :grade
  end 
end
