class CreateLogs < ActiveRecord::Migration[5.0]
  def change
    create_table :logs do |t|
      t.string :type
      t.string :element
      t.string :result

      t.timestamps
    end
  end
end
