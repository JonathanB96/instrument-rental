class InstrumentSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :price, :quantity, :image_url, :family_id
end
