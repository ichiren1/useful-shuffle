class Ichiren::Shuffle < ApplicationRecord
  def self.type
    'shuffle'
  end

  def execute
    @result = @element.shuffle
  end
end
