class Api::LoansController < ApplicationController

  def index
    @loans = Loan.where('year > ?', 2008)
  end

end
