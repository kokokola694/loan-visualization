class Api::LoansController < ApplicationController

  def index
    loans = Loan.where('year > ?', 2007).group("year", "month")
    @counts = loans.count
    @averages = loans.average("int_rate")
  end

end
