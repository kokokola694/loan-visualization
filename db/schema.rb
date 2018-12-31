# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_12_31_204727) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "loans", force: :cascade do |t|
    t.float "loan_amnt"
    t.float "funded_amnt"
    t.float "funded_amnt_inv"
    t.string "term"
    t.string "int_rate"
    t.float "installment"
    t.string "emp_length"
    t.string "home_ownership"
    t.float "annual_inc"
    t.string "issue_d"
    t.string "loan_status"
  end

end