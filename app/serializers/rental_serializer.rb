class RentalSerializer < ActiveModel::Serializer
  attributes :id, :instrument_id, :user_id
end
