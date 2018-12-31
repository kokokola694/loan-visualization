class Api::LoansController < ApplicationController

  def index
    @loans = Loan.all
  end

end
