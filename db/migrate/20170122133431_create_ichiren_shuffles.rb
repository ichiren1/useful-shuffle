class CreateIchirenShuffles < ActiveRecord::Migration[5.0]
  def change
    create_table :ichiren_shuffles do |t|
      t.string :element
      t.string :result

      t.timestamps
    end
  end
end
