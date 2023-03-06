class Instrument < ApplicationRecord
    has_many :rentals 
    has_many :users, through: :rentals
    belongs_to :family 
end
