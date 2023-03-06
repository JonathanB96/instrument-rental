class InstrumentSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :price, :quantity, :family_id
end
