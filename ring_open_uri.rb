# sketch

require 'sinatra'

class RingOpenURI < Sinatra::Base

  @@actions = []

  helpers do
    def actions
      @@actions
    end

    def actions_clear
      @@actions = []
    end
  end

  get "/" do
    erb :index
  end

  get "/actions/home" do
    @@actions << { name: :home, description: "Opening maps to find you the way home" }
  end

  get "/actions/bitcoin" do
    @@actions << { name: :bitcoin, description: "Creating a new wallet for you" }
  end

  get "/api" do
    content_type :json
    "OK"
  end

end

# meta refresh is event source ALPHA
#
# get "/event_source" do
#   "TODO"
# end
