<?php

namespace Drupal\react_app\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Class AppController.
 */
class AppController extends ControllerBase {

  /**
   * App.
   *
   * @return array
   *   Return render array.
   */
  public function app() {
    return [
      '#theme' => 'react_app',
      '#entity_id' => 1,
    ];
  }

}
