<?php

namespace Drupal\storybook_content\Controller;

use Drupal\Core\Controller\ControllerBase;

class DemoPageController extends ControllerBase {

  public function demoPage() {
    $build = [
      '#theme' => 'demo_page',
    ];

    return $build;
  }

}
