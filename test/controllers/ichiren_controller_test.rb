require 'test_helper'

class IchirenControllerTest < ActionDispatch::IntegrationTest
  test "should get shuffle" do
    get ichiren_shuffle_url
    assert_response :success
  end

end
