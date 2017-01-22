# == Schema Information
#
# Table name: logs
#
#  id         :integer          not null, primary key
#  type       :string(255)
#  element    :string(255)
#  result     :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Log < ApplicationRecord
end
