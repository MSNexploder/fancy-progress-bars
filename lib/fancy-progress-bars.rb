# -*- encoding: utf-8 -*-
module FancyProgressBars
  def self.register_module
    Compass::Frameworks.register('fancy-progress-bars',
                                 :stylesheets_directory => File.join(File.dirname(__FILE__), 'fancy-progress-bars/stylesheets'),
                                 :templates_directory   => File.join(File.dirname(__FILE__), 'fancy-progress-bars/templates'))
  end
end

FancyProgressBars.register_module
