require 'test_helper'

class EventsControllerTest < ActionDispatch::IntegrationTest
  test "should get API::Events" do
    get events_API::Events_url
    assert_response :success
  end

end
