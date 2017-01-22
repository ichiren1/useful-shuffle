class IchirenController < ApplicationController
  def shuffle
    shuffle = Ichiren::Shuffle.new

    shuffle.element = params[:element]
    shuffle.result = shuffle.execute

    if shuffle.save
      render json: { 'result' => shuffle.result }.to_json
    else
      render json: { 'error' => 'error' }.to_json
    end
  end
end
