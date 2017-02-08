# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170206164812) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "champions", force: :cascade do |t|
    t.string  "name",    null: false
    t.string  "key",     null: false
    t.integer "riot_id", null: false
    t.string  "title",   null: false
    t.text    "lore",    null: false
    t.string  "img",     null: false
  end

  create_table "matches", force: :cascade do |t|
    t.string  "match_id",    null: false
    t.integer "champion_id", null: false
    t.string  "champion"
    t.string  "gamemode",    null: false
    t.string  "lane",        null: false
    t.string  "season",      null: false
    t.string  "date"
    t.string  "duration"
    t.integer "user_id"
    t.index ["user_id"], name: "index_matches_on_user_id", using: :btree
  end

  create_table "models", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.index ["email"], name: "index_models_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_models_on_reset_password_token", unique: true, using: :btree
  end

  create_table "players", force: :cascade do |t|
    t.string  "name",              null: false
    t.integer "riot_id",           null: false
    t.string  "icon_id",           null: false
    t.integer "champion_id",       null: false
    t.string  "champion"
    t.string  "lane",              null: false
    t.integer "team",              null: false
    t.boolean "won",               null: false
    t.integer "kills",             null: false
    t.integer "deaths",            null: false
    t.integer "assists",           null: false
    t.integer "tower_kills",       null: false
    t.integer "level",             null: false
    t.boolean "first_blood",       null: false
    t.boolean "first_tower",       null: false
    t.integer "gold_earned",       null: false
    t.integer "damage_dealt",      null: false
    t.integer "damage_taken",      null: false
    t.integer "healing_done",      null: false
    t.integer "minions_killed",    null: false
    t.integer "largest_multikill", null: false
    t.integer "wards_placed",      null: false
    t.integer "item_0"
    t.integer "item_1"
    t.integer "item_2"
    t.integer "item_3"
    t.integer "item_4"
    t.integer "item_5"
    t.integer "item_6"
    t.integer "match_id",          null: false
    t.integer "user_id"
    t.index ["match_id"], name: "index_players_on_match_id", using: :btree
    t.index ["user_id"], name: "index_players_on_user_id", using: :btree
  end

  create_table "replies", force: :cascade do |t|
    t.text     "content",    null: false
    t.integer  "user_id",    null: false
    t.integer  "topic_id",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["topic_id"], name: "index_replies_on_topic_id", using: :btree
    t.index ["user_id"], name: "index_replies_on_user_id", using: :btree
  end

  create_table "topics", force: :cascade do |t|
    t.string   "title",       null: false
    t.text     "content",     null: false
    t.integer  "user_id",     null: false
    t.integer  "champion_id", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["champion_id"], name: "index_topics_on_champion_id", using: :btree
    t.index ["user_id"], name: "index_topics_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "riot_username"
    t.integer  "riot_id"
    t.integer  "icon_id"
    t.integer  "level"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

end
