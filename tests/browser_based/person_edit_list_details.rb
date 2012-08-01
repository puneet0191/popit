# encoding: UTF-8
# coding: UTF-8
# -*- coding: UTF-8 -*-

require 'popit_watir_test_case'
require 'pry'
require 'net/http'
require 'uri'


class PersonContactDetailEditingTests < PopItWatirTestCase

  def test_person_contact_detail_editing
    goto_instance 'test'
    delete_instance_database
    load_test_fixture
    goto '/'
    login_to_instance
    goto '/person/george-bush'    

    # Enter a phone number
    @b.link(:text => '+ add a new contact detail').click
    @b.text_field(:name => 'kind').send_keys( 'Phone')
    @b.text_field(:name => 'value').send_keys( '01234 567 890')
    @b.input(:type => 'submit').click

    # Enter an address
    @b.link(:text => '+ add a new contact detail').click
    @b.text_field(:name => 'kind').send_keys( 'Address' )
    @b.text_field(:name => 'value').send_keys( '1600 Pennsylvania Avenue' )
    @b.input(:name => 'save').click

    # Check that the new details are on the page (even after refresh)
    assert @b.element(:text => '01234 567 890').present?
    assert @b.element(:text => '1600 Pennsylvania Avenue').present?
    @b.refresh
    assert @b.element(:text => '01234 567 890').present?
    assert @b.element(:text => '1600 Pennsylvania Avenue').present?

    # Edit the phone number
    @b.link(:text => '^ edit').click
    @b.text_field(:name => 'value').set( '11111 222 333')
    @b.input(:name => 'save').click
    @b.wait_until { @b.element(:text => '11111 222 333').present? }
    @b.refresh
    assert @b.element(:text => '11111 222 333').present?

    # Delete the phone number
    assert_equal 3, @b.section(:class => 'contact-information').ul.lis.count
    @b.link(:text => '^ edit').click
    @b.button(:name => 'delete').click
    @b.wait_until { 2 == @b.section(:class => 'contact-information').ul.lis.count }
    assert ! @b.element(:text => '11111 222 333').present?

  end

  def test_person_link_editing
    goto_instance 'test'
    delete_instance_database
    load_test_fixture
    goto '/'
    login_to_instance
    goto '/person/george-bush'    

    # Enter a phone number
    @b.link(:text => '+ add a new link').click
    @b.text_field(:name => 'comment').send_keys( 'Wikipedia' )
    @b.text_field(:name => 'url').send_keys( 'http://en.wikipedia.org/wiki/George_W._Bush' )
    @b.input(:type => 'submit').click

    # Enter an address
    @b.link(:text => '+ add a new link').click
    @b.text_field(:name => 'comment').send_keys( 'White House' )
    @b.text_field(:name => 'url').send_keys( 'http://www.whitehouse.gov/about/presidents/georgehwbush' )
    @b.input(:name => 'save').click

    # Check that the new details are on the page (even after refresh)
    assert @b.element(:text => 'Wikipedia:').present?
    assert @b.element(:text => 'http://en.wikipedia.org/wiki/George_W._Bush').present?
    @b.refresh
    assert @b.element(:text => 'Wikipedia:').present?
    assert @b.element(:text => 'http://en.wikipedia.org/wiki/George_W._Bush').present?

    # Edit the phone number
    @b.link(:text => '^ edit').click
    @b.text_field(:name => 'url').set( 'http://foo.com/')
    @b.input(:name => 'save').click
    @b.wait_until { @b.element(:text => 'http://foo.com/').present? }
    @b.refresh
    assert @b.element(:text => 'http://foo.com/').present?

    # Delete the phone number
    assert_equal 3, @b.section(:class => 'links').ul.lis.count
    @b.link(:text => '^ edit').click
    @b.button(:name => 'delete').click
    @b.wait_until { 2 == @b.section(:class => 'links').ul.lis.count }
    assert ! @b.element(:text => 'http://foo.com/').present?


  end

end