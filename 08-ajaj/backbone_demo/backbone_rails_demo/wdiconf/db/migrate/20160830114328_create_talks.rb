class CreateTalks < ActiveRecord::Migration[5.0]
  def change
    create_table :talks do |t|
      t.text :topic
      t.string :speaker
      t.string :sessionTime
      t.integer :seats

      t.timestamps
    end
  end
end
