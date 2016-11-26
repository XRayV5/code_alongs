require 'minitest/autorun'
require 'minitest/pride'
require './sum'

# Minitest::Reporters.use!


class SumOfTest < Minitest::Test
  def test_passing_in_20
    assert_equal 78, sum35(20)
  end

  def test_passing_in_10
    assert_equal 23, sum35(10)
  end

  def test_passing_in_15
    assert_equal 45, sum35(15)
  end
end
