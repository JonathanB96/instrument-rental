class Rental < ApplicationRecord
    belongs_to :instrument
    belongs_to :users
end
