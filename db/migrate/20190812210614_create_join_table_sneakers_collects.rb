class CreateJoinTableSneakersCollects < ActiveRecord::Migration[5.2]
  def change
    create_join_table :sneakers, :collects do |t|
      # t.index [:sneaker_id, :collect_id]
      # t.index [:collect_id, :sneaker_id]
    end
  end
end
