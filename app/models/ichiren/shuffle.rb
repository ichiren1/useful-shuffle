# == Schema Information
#
# Table name: ichiren_shuffles
#
#  id         :integer          not null, primary key
#  element    :string(255)
#  result     :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Ichiren::Shuffle < ApplicationRecord
  include Ichiren

  def execute
    element.split(',').shuffle
  end
end
