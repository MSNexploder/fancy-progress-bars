# -*- encoding: utf-8 -*-
$:.push File.expand_path("../lib", __FILE__)
require "fancy-progress-bars/version"

Gem::Specification.new do |s|
  s.name        = "fancy-progress-bars"
  s.version     = FancyProgressBars::VERSION::STRING
  s.platform    = Gem::Platform::RUBY
  s.authors     = ["Stefan Huber"]
  s.email       = ["MSNexploder@gmail.com"]
  s.homepage    = "https://github.com/MSNexploder/fancy-progress-bars"
  s.summary     = %q{Make fancy CSS3 progress bars with the Compass stylesheet authoring framework.}
  s.description = %q{Fancy Progress Bars helps you easily style progress bars with beautiful CSS3 features without any images. This requires the Compass stylesheet authoring framework.}

  s.add_development_dependency 'bundler', '~> 1.0.10'

  s.add_dependency 'compass', '~> 0.11.beta.7'

  s.rubyforge_project = "fancy-progress-bars"

  s.files         = `git ls-files`.split("\n")
  s.test_files    = `git ls-files -- {test,spec,features}/*`.split("\n")
  s.executables   = `git ls-files -- bin/*`.split("\n").map{ |f| File.basename(f) }
  s.require_paths = ["lib"]
end
