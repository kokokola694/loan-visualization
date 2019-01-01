class Api::LoansController < ApplicationController

  def index
    loans = Loan.where('year > ?', 2008)
    @counts = loans.group("year", "month").count
    @averages = loans.group("year", "month").average("int_rate")
  end

end
